/**
 * TODO:
 * 1. Некорректный подсчет суммы
 */

$(() => {
	function dropdown() {
		const dropdown = $('.dropdown');
		const minusBtn = $('.dropdown__btn_minus');
		const plusBtn = $('.dropdown__btn_plus');
		const applyBtn = $('.dropdown__btn_apply');
		const clearBtn = $('.dropdown__btn_clear');
		let sum = 0;
		
		function count() {
			let counter = $(this).parent().find('.dropdown__counter-num');
			let category = $(this).parents('li').data('dropdown-category');
			let number = parseInt(counter.data('dropdown-counter'));
			let mainText = $(this).parents('.dropdown__list').prev().find('.dropdown__main-text');
			const minusActiveBtn = $(this).parent().find('.dropdown__btn_minus');
			const clearActiveBtn = $(this).parents('.dropdown__list').find('.dropdown__btn_clear');

			if($(this).hasClass('dropdown__btn_minus') && number > 0) {
				number--;
				sum--;
			}

			else if($(this).hasClass('dropdown__btn_plus')) {
				number++;
				sum++;
			}
			
			if(number > 0) {
				minusActiveBtn.removeClass('dropdown__btn_circle_inactive');
				clearActiveBtn.css('display', 'block');
			}

			counter.data('dropdown-counter', number);
			counter.text(number);
			
			if(dropdown.hasClass('dropdown__roomsCounter')) {
				let regexp = new RegExp('\\d+ ' + category, 'g');
				let resText = mainText.text().replace(regexp, number + ' ' + category);
				mainText.text(resText);
			}

			if(number <= 0) { 
				minusActiveBtn.addClass('dropdown__btn_circle_inactive');	
				return; 
			}
		}

		function showResult() { 
			let mainText = $(this).parents('.dropdown__list').prev().find('.dropdown__main-text');
			mainText.text(`гости: ${sum}`);
		}
		 
		function clear() {
			let mainText = $(this).parents('.dropdown__list').prev().find('.dropdown__main-text');
			let counters = $('.dropdown_peopleCounter').find('.dropdown__counter-num');
			$.each(counters, (ind, val) => {
				$(val).data('dropdown-counter', 0);
				$(val).text(`0`);
			});
			mainText.text('Сколько гостей');
			$(this).css('display', 'none');
		}

		minusBtn.on('click', count);
		plusBtn.on('click', count);
		applyBtn.on('click', showResult);
		clearBtn.on('click', clear);
	}

	dropdown();

	$('.dropdown__main').on('click',function(){
		$(this).next('.dropdown__list').slideToggle(280);
		$(this).toggleClass('dropdown__main_active');
	});

});