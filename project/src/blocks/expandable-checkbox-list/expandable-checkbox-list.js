$(() => {

	function slideCheckboxList() {
		$('.expandable-checkbox-list__title-block').on('click',function(){
			$(this).next().slideToggle(280);
			$(this).find('.expandable-checkbox-list__arrow-svg').toggleClass('expandable-checkbox-list__arrow-svg_active');
		});
	}

	slideCheckboxList();
});