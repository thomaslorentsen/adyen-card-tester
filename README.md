[![Build Status](https://travis-ci.org/thomaslorentsen/adyen-card-tester.svg?branch=master)](https://travis-ci.org/thomaslorentsen/adyen-card-tester)
[![Docker Build](https://img.shields.io/docker/automated/imacatlol/adyen-card-tester.svg)](https://hub.docker.com/r/imacatlol/adyen-card-tester/)
[![Docker pulls](https://img.shields.io/docker/pulls/imacatlol/adyen-card-tester.svg)](https://hub.docker.com/r/imacatlol/adyen-card-tester/)
# Adyen Client Side Encryption (CSE) Tester
This Docker container allows you to generate the client side encrypted payload for Adyen using a simple web interface.

With the generated payload, you can use it to authorise a payment through the Adyen API.

Alternative test cards are available on the [Adyen Test Cards Page](https://docs.adyen.com/developers/payments/test-cards/test-card-numbers).
# Installing
Pull the image from Docker with:
```bash
docker pull imacatlol/adyen-card-tester
```
# Running
Then run the container with the following command and replace ```ADYEN_KEY``` with your Adyen public key.
```bash
docker run -d --name adyen-card-tester \
	-p 127.0.0.1:4444:4444 \
	-e ADYEN_KEY="adyen public key" \
	imacatlol/adyen-card-tester
```
Once the container has started you can open the app in your browser.

```bash
open http://127.0.0.1:4444
```

Press submit to view the encrypted payload.
