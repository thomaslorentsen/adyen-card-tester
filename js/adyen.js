(function() {
    $("input:text, textarea").on('click focus', function() {
        $(this).select()
    })

    $('#adyen-encrypted-form').on('submit', function(e) {
        e.preventDefault()
        var form = $(this)
        var cardData = getCardData(form)
        encryptMyData(form, cardData);
    })

    $('#adyen-encrypted-cvc-form').on('submit', function(e) {
        e.preventDefault()
        var form = $(this)
        var cardData = getCVCData(form)
        encryptMyData(form, cardData);
    })

    $('#adyen-encrypted-holder-name-form').on('submit', function(e) {
        e.preventDefault()
        var form = $(this)
        var cardData = getNameData(form)
        encryptMyData(form, cardData);
    })

    /**
     * Encrypt Card Data
     *
     * @param form
     * @param cardData
     */
    function encryptMyData(form, cardData) {
        var options = {}
        var postData = {}
        var cseInstance = adyen.encrypt.createEncryption(key, options)
        try {
            var valid = cseInstance.validate(cardData)
            console.log(valid)

            postData['adyen-encrypted-data'] = cseInstance.encrypt(cardData);
            console.log(postData)
            $('.enc', form).text(postData['adyen-encrypted-data'])
        } catch(e) {
            console.log(e);
            $('.enc', form).text(e)
        }
    }

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
     * Gets Holder Name from form
     *
     * @param form
     * @returns {{holderName: jQuery, generationtime: string}}
     */
    function getNameData(form) {
        var today = new Date();
        return {
            holderName : $('input[data-encrypted-name="holderName"]', form).val(),
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
