<?php 
    $id = get_the_ID();
    $found = false;
    $res = (get_field('status', $id) == 'RESERVED')? ' singleBolig--reserved' : '' ;
    $address = str_replace("<br />", "", get_field( 'address', $id ));
    $status = get_field( 'status', $id );
    $offmarket = get_field( 'offmarket', $id );
    if(!$offmarket){
?>
        <div class="col-12 singleBoligCard" data-address="<?php echo $address; ?>">
            <div class="singleBolig <?php //echo (get_field( 'status', $id ) == "SOLD")? "sold" : ""; echo $res; ?>">
                <div class="singleBolig__image">
                    <?php
                        if(has_post_thumbnail($id)){
                            $img = get_the_post_thumbnail_url( $id, 'large' );
                        }else{
                            $photos = get_field('gallery', $id);
                            $img = !empty($photos[0]) ? $photos[0]['image_mobile'] : false;
                        }
                        if($img){

                            echo '<a href="'.get_the_permalink().'">';

                            printf(
                                '<img  data-src="%s" class="lazyload" alt="%s" /></a>',
                                $img,
                                'alt'
                            );


                            if (get_field('open_house', $id) && get_field('open_house_date', $id) && $status !== 'SOLD') {
                                echo '<div class="flag flag-open-house"><div>Åbent hus' . (get_field('open_house_signup',
                                        $id) ? ' med tilmelding' : '') . ':</div> <strong>' . get_field('open_house_date',
                                        $id) . '</strong></div>';
                            }else if($status == 'RESERVED'){
                                echo '<div class="flag"><div>Reserveret</div></div>';
                            }

                            echo '</a>';

                        }
                    ?>
                </div>
                <div class="singleBolig__content">
                    <div class="singleBoligInner">
                        <div class="singleBolig__content__address">
                            <span><?php the_field( 'address', $id ); ?></span>
                        </div>
                        <div class="singleBolig__content__info">
                            <div class="houseData">
                                <span>Boligtype:  <?php the_field( 'boligtype', $id ); ?></span>
                                <?php
                                if((get_field( 'bolig__kld__grund', $id ) !== "0") && (get_field( 'erhvervsareal', $id ) !== "0") && (get_field( 'kld', $id ) !== "0")): ?>
                                    <span>Bolig / erhv. / kld:  <?php echo get_field( 'bolig__kld__grund', $id ) . ' / ' . get_field( 'erhvervsareal', $id ) . ' / ' . get_field( 'kld', $id ); ?> m<sup>²</sup></span>
                                    <?php $found = true; ?>
                                <?php elseif((get_field( 'bolig__kld__grund', $id ) !== "0") && (get_field( 'kld', $id ) !== "0")): ?>
                                    <span>Bolig / kld:  <?php echo get_field( 'bolig__kld__grund', $id ) . ' / ' . get_field( 'kld', $id ); ?> m<sup>²</sup></span>
                                    <?php $found = true; ?>
                                <?php elseif(get_field( 'bolig__kld__grund', $id ) !== "0"): ?>
                                    <span>Bolig:  <?php the_field( 'bolig__kld__grund', $id ); ?> m<sup>²</sup></span>
                                    <?php $found = true; ?>
                                <?php elseif(get_field( 'kld', $id ) !== "0"): ?>
                                    <span>Kld:  <?php the_field( 'kld', $id ); ?> m<sup>²</sup></span>
                                    <?php $found = true; ?>
                                <?php endif; ?>


                                <?php if(get_field( 'grund', $id )): ?>
                                    <span>Grund:  <?php the_field( 'grund', $id ); ?> m<sup>²</sup></span>
                                <?php else: ?>
                                    <span>&nbsp;</span>
                                <?php endif; ?>

                                <?php if($status !== "SOLD"): ?>
                                    <?php if(!get_field( 'pris_pa_foresporgsel', $id )): ?>
                                        <span>Kontant: <?php the_field( 'kontant', $id ); ?></span>
                                    <?php else: ?>
                                        <span>Kontant: Pris på forespørgsel</span>
                                    <?php endif; ?>
                                <?php endif; ?>
                                <?php if(!$found): ?>
                                    <span>&nbsp;</span>
                                <?php endif; ?>
                            </div>
                            <?php if($status == 'RESERVED'): ?>
                                <a href="<?php the_permalink(); ?>" class="button button--green2 button--arrow"><span>Reserveret</span></a>
                            <?php elseif($status == 'SOLD'): ?>
                                <a href="<?php the_permalink(); ?>" class="button button--green2 button--arrow"><span>Solgt</span></a>
                            <?php else: ?>
                                <a href="<?php the_permalink(); ?>" class="button button--green2 button--arrow"><span>Se ejendom</span></a>
                            <?php endif; ?>
                        </div>
                    </div>
                    <div class="boligSold">SOLGT</div>
                </div>
            </div>
        </div>
<?php } ?>