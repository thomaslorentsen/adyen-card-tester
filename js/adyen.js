(function() {
    $('#adyen-encrypted-form').on('submit', function(e) {
        var form = $(this)
        e.preventDefault();
        var options = {}; // See adyen.encrypt.nodom.html for details
        var cseInstance = adyen.encrypt.createEncryption(key, options);
        encryptMyData();
        function encryptMyData() {
            var postData = {}
            var cardData = getCardData(form)
            try {
                postData['adyen-encrypted-data'] = cseInstance.encrypt(cardData);
                console.log(postData)
                $('.enc', form).text(postData['adyen-encrypted-data'])
            } catch(e) {
                console.log(e);
                $('.enc', form).text(e)
            }
        }
    })

    $('#adyen-encrypted-cvc-form').on('submit', function(e) {
        var form = $(this)
        e.preventDefault();
        var options = {}; // See adyen.encrypt.nodom.html for details
        var cseInstance = adyen.encrypt.createEncryption(key, options);
        encryptMyData();
        function encryptMyData() {
            var postData = {};
            var cardData = getCVCData(form)
            try {
                postData['adyen-encrypted-data'] = cseInstance.encrypt(cardData);
                console.log(postData)
                $('.enc', form).text(postData['adyen-encrypted-data'])
            } catch(e) {
                console.log(e);
                $('.enc', form).text(e)
            }
        }
    })

    /**
     * Gets CVC from form
     *
     * @param form
     * @returns {{cvc: jQuery, generationtime: string}}
     */
    function getCVCData(form) {
        var today = new Date();
        return {
            cvc : $('input[data-encrypted-name="cvc"]', form).val(),
            generationtime : today.toISOString()
        }
    }

    /**
     * Gets all card data from form
     *
     * @param form
     * @returns {{number: jQuery, cvc: jQuery, holderName: jQuery, expiryMonth: jQuery, expiryYear: jQuery, generationtime: string}}
     */
    function getCardData(form) {
        var today = new Date();
        return {
            number : $('input[data-encrypted-name="number"]', form).val(),
            cvc : $('input[data-encrypted-name="cvc"]', form).val(),
            holderName : $('input[data-encrypted-name="holderName"]', form).val(),
            expiryMonth : $('input[data-encrypted-name="expiryMonth"]', form).val(),
            expiryYear : $('input[data-encrypted-name="expiryYear"]', form).val(),
            generationtime : today.toISOString()
        }
    }
})();
