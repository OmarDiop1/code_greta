$('button').on("click", function () {
    var codebar = $('#codeBar').val();
    $('.codeBar').text(codebar);


    $.get('https://world.openfoodfacts.org/api/v0/product/' + codebar + '.json', function (datas) {
        console.log(datas);
        $('#marque').text(datas.product.brands);

        $('.image').attr('src', datas.product.image_front_small_url);

        $('#nutriscore').html('<img src ="https://static.openfoodfacts.org/images/attributes/nutriscore-' + datas.product.nutriscore_grade + '.svg">');







    });
});

