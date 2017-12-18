var quickStart = $('.quick-start');
var fullReset = $('.full-reset');
var familyBlock = $('.family-block');
var allIncluded = $('.all-included');
$('.tab-1').on('click', function(event) {
	$('.tab-1').addClass('active-tab');
	$('.tab-2').removeClass('active-tab');
	$('.tab-3').removeClass('active-tab');
	$('.tab-4').removeClass('active-tab');
	$(quickStart).removeClass('hidden').addClass('visible');
	$(fullReset).removeClass('visible').addClass('hidden');
	$(familyBlock).removeClass('visible').addClass('hidden');
	$(allIncluded).removeClass('visible').addClass('hidden');
});
$('.tab-2').on('click', function(event) {
	$('.tab-2').addClass('active-tab');
	$('.tab-1').removeClass('active-tab');
	$('.tab-3').removeClass('active-tab');
	$('.tab-4').removeClass('active-tab');
	$(fullReset).removeClass('hidden').addClass('visible');
	$(quickStart).removeClass('visible').addClass('hidden');
	$(familyBlock).removeClass('visible').addClass('hidden');
	$(allIncluded).removeClass('visible').addClass('hidden');
});
$('.tab-3').on('click', function(event) {
	$('.tab-3').addClass('active-tab');
	$('.tab-1').removeClass('active-tab');
	$('.tab-2').removeClass('active-tab');
	$('.tab-4').removeClass('active-tab');
	$(familyBlock).removeClass('hidden').addClass('visible');
	$(fullReset).removeClass('visible').addClass('hidden');
	$(quickStart).removeClass('visible').addClass('hidden');
	$(allIncluded).removeClass('visible').addClass('hidden');
});
$('.tab-4').on('click', function(event) {
	$('.tab-4').addClass('active-tab');
	$('.tab-1').removeClass('active-tab');
	$('.tab-2').removeClass('active-tab');
	$('.tab-3').removeClass('active-tab');
	$(allIncluded).removeClass('hidden').addClass('visible');
	$(fullReset).removeClass('visible').addClass('hidden');
	$(quickStart).removeClass('visible').addClass('hidden');
	$(familyBlock).removeClass('visible').addClass('hidden');
});