(function() {
  $('#adyen-encrypted-form').on('submit', function(e) {
    e.preventDefault();
    var options = {}; // See adyen.encrypt.nodom.html for details
    var cseInstance = adyen.encrypt.createEncryption(key, options);
    encryptMyData();
    function encryptMyData() {
      var postData = {};
      var today = new Date();
      var cardData = {
          number : $('#number').val(),
          cvc : $('#cvc').val(),
          holderName : $('#holderName').val(),
          expiryMonth : $('#expiryMonth').val(),
          expiryYear : $('#expiryYear').val(),
          generationtime : today.toISOString()
      };
      try {
        postData['adyen-encrypted-data'] = cseInstance.encrypt(cardData);
          console.log(postData)
          $('#enc').text(postData['adyen-encrypted-data']);
        } catch(e) {
          console.log(e);
          $('#enc').text(e)
        }
      }
  })
})();
