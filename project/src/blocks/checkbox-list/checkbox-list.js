$(() => {

	function slideCheckboxList() {
		$('.expandable-checkbox-list .checkbox-list__title-block').on('click',function(){
			$(this).next().slideToggle(280);
			$(this).find('.checkbox-list__arrow-svg').toggleClass('checkbox-list__arrow-svg_active');
		});
	}

	slideCheckboxList();
});