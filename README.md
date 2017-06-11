# adyen-test-card-encryption
Test Adyen Card Encryption


```bash
docker build --no-cache -t adyen-card-tester .
```

```bash
docker run -d --name adyen-card-tester \
	-p 127.0.0.1:4444:5000 \
	-e ADYEN_KEY="adyen public key" \
	adyen-card-tester
```


```bash
docker stop adyen-card-tester
docker rm adyen-card-tester
docker rmi adyen-card-tester
```