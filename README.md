# adyen-test-card-encryption
Test Adyen Card Encryption

Copy config.example.php to config.php and set the key

```bash
npm install
```

```bash
docker build -t adyen-card-test .
```

```bash
docker run -d --name adyen-card-test -p 127.0.0.1:8080:80 adyen-card-test
```