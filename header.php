<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package esoftdk
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
	<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link rel="preconnect" href="https://player.vimeo.com">
	<link rel="preconnect" href="https://i.vimeocdn.com">
	<link rel="preconnect" href="https://f.vimeocdn.com">
	<script src="https://player.vimeo.com/api/player.js"></script>
	<script src="//maps.googleapis.com/maps/api/js?key=AIzaSyDmoff39vEjlvCxD1vN4FU2nXUXKH0JODk&amp;libraries=drawing,geometry,places,visualization"></script>
	<script id="CookieConsent" src="https://policy.app.cookieinformation.com/uc.js" data-culture="DA" type="text/javascript"></script>
	<?php wp_head(); ?>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-115292971-1" />
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-115292971-1');
	</script>

</head>

<body <?php body_class(); ?> data-barba="wrapper">
<?php wp_body_open(); ?>
<div id="page" class="site">
	<header id="masthead" class="site-header">

		<nav id="site-navigation" class="main-navigation">
			<div class="container burgerContainer">
				<div class="row">
					<div class="col-12">
					    <button id="hamburger" class="hamburger menu-toggle" aria-label="Main Menu" aria-controls="primary-menu" aria-expanded="false">
							<svg width="100" height="100" viewBox="0 0 100 100">
								<path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
								<path class="line line2" d="M 20,50 H 80" />
								<path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
							</svg>
					    </button>
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="headerBar">
							<a href="/" class="headerBar__logo" aria-label="logo">
								<?php echo file_get_contents('wp-content/themes/elbaeks/img/logo.svg'); ?>
							</a>
							<?php
								wp_nav_menu(
									array(
										'menu' => 'menu',
										'menu_class' => 'menu container'
									)
								);
							?>
						</div>
					</div>
				</div>
			</div>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->