$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(function() {
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});

$(function() {
    $('.close').on('click', function() {
        $('#imagemodal').modal('hide');
    });
});