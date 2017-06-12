# Adyen Client Slide Encryption Tester
This Docker container allows you to generate the client side encrypted payload for Adyen.
# Installing
Pull the image from Docker with:
```bash
docker pull imacatlol/adyen-card-tester
```
# Running
Then run the container with the following command and replace ```ADYEN_KEY``` with your Adyen public key.
```bash
docker run -d --name adyen-card-tester \
	-p 127.0.0.1:4444:5000 \
	-e ADYEN_KEY="adyen public key" \
	imacatlol/adyen-card-tester
```
Once the container has started you can open the app in your browser.

http://127.0.0.1:4444

Press submit to view the encrypted payload.