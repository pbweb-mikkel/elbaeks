let width = window.innerWidth;
let lastScrollTop = 0;
/*
barba.use(barbaPrefetch);

barba.init({
	// debug: true,
	timeout: 5000,
	views: [

		{
			namespace: 'default',
			afterEnter: function afterEnter(data) {
				init();
			},
			beforeLeave: function enter(data){

			}

		},

	],
	transitions: [
		{
			name: 'default-transition',
			async leave(data) {
			    await defaultTransitionLeave(data.current.container);
			},
			async enter(data) {
				data.current.container.remove();
				await defaultTransitionEnter(data.next.container);
			}
		}
	]
});

barba.hooks.enter(({ current, next }) => {
    window.scrollTo(0, 0);
});
*/
function init(){
	
    change_menu();
	if(document.querySelector('.heroWrap')) hero_setup();
	if(document.getElementById('bolig')) bolig_setup();
	if(document.getElementById('share_post_widget')) setup_post_social();
	if(document.getElementById('kobertkartotekForm')) kobertkartotek_form_fn();
	if(document.getElementById('vurdering_form')) vurderingForm_form_fn();
	if(document.getElementById('skuffesalg_form')) skuffesalg_form_fn();
	if(document.getElementById('cookieBlock')) cookie_block();
	if(document.querySelector('.singleField--autocomplete')) autoCompleteFields();
	if(document.querySelector('.searchPropertyBlock__input')) searchProperties();
}
init();
header();
instagram_slider();

window.addEventListener('resize', change_menu, true);