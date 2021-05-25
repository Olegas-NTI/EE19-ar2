<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter/index.svelte';
	// import * as openpgp from '../../node_modules/openpgp/dist/openpgp';
	import * as openpgp from 'openpgp';
	(async () => {
    var readableStream = new ReadableStream({
        start(controller) {
            controller.enqueue(new Uint8Array([0x01, 0x02, 0x03]));
            controller.close();
        }
    });

    const publicKeyArmored = `-----BEGIN PGP PUBLIC KEY BLOCK-----
...
-----END PGP PUBLIC KEY BLOCK-----`;
    const privateKeyArmored = `-----BEGIN PGP PRIVATE KEY BLOCK-----
...
-----END PGP PRIVATE KEY BLOCK-----`; // encrypted private key
    const passphrase = `yourPassphrase`; // what the private key is encrypted with

    const privateKey = await openpgp.decryptKey({
        privateKey: await openpgp.readKey({ armoredKey: privateKeyArmored }),
        passphrase
    });

    const message = await openpgp.createMessage({ binary: readableStream }); // or createMessage({ text: ReadableStream<String> })
    const signatureArmored = await openpgp.sign({
        message,
        privateKeys: privateKey // for signing
    });
    console.log(signatureArmored); // ReadableStream containing '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'

    const verified = await openpgp.verify({
        message: await openpgp.readMessage({ armoredMessage: signatureArmored }), // parse armored signature
        publicKeys: await openpgp.readKey({ armoredKey: publicKeyArmored })   // for verification
    });

    for await (const chunk of verified.data) {}
    // Note: you *have* to read `verified.data` in some way or other,
    // even if you don't need it, as that is what triggers the
    // verification of the data.

    const valid = await verified.signatures[0].verified;
    if (valid) {
        console.log('signed by key id ' + verified.signatures[0].keyID.toHex());
    } else {
        throw new Error('signature could not be verified');
    }
})();
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<source srcset="svelte-welcome.webp" type="image/webp" />
				<img src="svelte-welcome.png" alt="Welcome" />
			</picture>
		</div>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
