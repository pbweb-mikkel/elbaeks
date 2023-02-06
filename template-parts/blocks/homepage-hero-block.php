
<div class="heroWrap">
	<!-- <div id="stickHeader"></div> -->
    <div id="fullVideo" data-vimeo-id="<?php the_field( 'video_id' ); ?>" data-vimeo-defer>
    	<?php 
    		if(get_field('image_placeholder'))
    			printf(
    				'<img src="%s" alt="hero placeholder" class="heroPlaceholderImage" />',
    				get_field('image_placeholder')['sizes']['post-featured']
    			);
    	?>
	    <div class="container">
	    	<div class="row">
	    		<div class="col-12">
	    			<div class="homeHero">
	    				<div class="homeHero__unmute">
							<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							        <g id="Frontpage" transform="translate(-323.000000, -835.000000)" fill="#FCF2E5">
							            <g id="Actions-/-Controls-/-volume--up-/-32-Copy" transform="translate(323.000000, 835.000000)">
							                <path d="M38.75,15.5125 L36.9875,13.75 L32.5,18.2375 L28.0125,13.75 L26.25,15.5125 L30.7375,20 L26.25,24.4875 L28.0125,26.25 L32.5,21.7625 L36.9875,26.25 L38.75,24.4875 L34.2625,20 L38.75,15.5125 L38.75,15.5125 Z M22.5,37.5 C22.1659426,37.4986132 21.8463393,37.3635696 21.6125,37.125 L12.0875,27.5 L3.75,27.5 C3.05964406,27.5 2.5,26.9403559 2.5,26.25 L2.5,26.25 L2.5,13.75 C2.5,13.0596441 3.05964406,12.5 3.75,12.5 L12.0875,12.5 L21.6125,2.875 C22.1000468,2.39034551 22.8874532,2.39034551 23.375,2.875 C23.6105178,3.10578808 23.7453037,3.42028842 23.75,3.75 L23.75,36.25 C23.75,36.9403559 23.1903559,37.5 22.5,37.5 Z M5,25 L12.5,25 C12.8643896,24.9976119 13.2165456,25.131342 13.4875,25.375 L21.25,33.2125 L21.25,6.7875 L13.4875,14.625 C13.2165456,14.868658 12.8643896,15.0023881 12.5,15 L5,15 L5,25 Z" id="Fill"></path>
							            </g>
							        </g>
							    </g>
							</svg>
	    				</div>
	    				<div class="homeHero__mute">
							<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							        <g id="Frontpage" transform="translate(-323.000000, -905.000000)" fill="#FCF2E5">
							            <g id="Actions-/-Controls-/-volume--up-/-32" transform="translate(323.000000, 905.000000)">
							                <path d="M33.95,10.1 L32.0375,11.7125 C36.1028596,16.52818 35.9474717,23.6170843 31.675,28.25 L33.5125,30 C38.6431259,24.4403832 38.8306913,15.9302693 33.95,10.15 L33.95,10.1 Z M26.975,15 C29.4136078,17.891694 29.3171447,22.1467865 26.75,24.925 L28.5875,26.625 C32.0091375,22.9168963 32.1324173,17.2406634 28.875,13.3875 L26.975,15 Z M22.5,37.5 C22.1659426,37.4986132 21.8463393,37.3635696 21.6125,37.125 L12.0875,27.5 L3.75,27.5 C3.05964406,27.5 2.5,26.9403559 2.5,26.25 L2.5,26.25 L2.5,13.75 C2.5,13.0596441 3.05964406,12.5 3.75,12.5 L12.0875,12.5 L21.6125,2.875 C22.1000468,2.39034551 22.8874532,2.39034551 23.375,2.875 C23.6105178,3.10578808 23.7453037,3.42028842 23.75,3.75 L23.75,36.25 C23.75,36.9403559 23.1903559,37.5 22.5,37.5 Z M5,25 L12.6,25 C12.9340574,25.0013868 13.2536607,25.1364304 13.4875,25.375 L21.25,33.2125 L21.25,6.7875 L13.4875,14.625 C13.2536607,14.8635696 12.9340574,14.9986132 12.6,15 L5,15 L5,25 Z" id="Fill"></path>
							            </g>
							        </g>
							    </g>
							</svg>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </div>
<!--     <iframe src="https://player.vimeo.com/video/<?php the_field( 'video_id' ); ?>?muted=1&loop=1&controls=1&autoplay=1" id='fullVideo' data-id="<?php //the_field( 'video_id' ); ?>" aria-label='Elbaeks video' height="0" width="0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> -->
</div>