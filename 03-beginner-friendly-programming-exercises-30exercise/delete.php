<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Ace_Institute_of_Management
 */


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E4NYRNJ8VE"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-E4NYRNJ8VE');
    </script>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php if (is_front_page()) : ?>
        <title>Ace Institute of Management | Ace International Business School</title>
        <meta name="description" content="One of Nepal’s leading business schools, Ace fosters environment that nurtures students’ growth and evolution into self-regulated, life-long learners; thoughtful, responsible individuals; and principled, innovative leaders who improve their society and the world.">
        <meta name="keywords" content="undergraduate degree in nepal,bachelor admission in nepal 2020,top management college in nepal,top management college in Kathmandu Nepal, Best Quality Management College in Nepal, Best Faculties in Management, Best Faculties in Management in Nepal, Good learning environment college, Best College For Management">
        <meta name="author" content="We are Ace">
    <?php endif; ?>
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/img/ace_ico.png" type="image/x-icon" />
    <?php if (!is_front_page()) : ?>
        <title><?php wp_title(''); ?></title>
        <meta name="description" content="<?php echo the_field('meta_description') ?>">
        <meta property="og:title" content="<?php wp_title(''); ?>" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="<?php echo home_url($_SERVER['REQUEST_URI']); ?>" />
        <?php if (has_post_thumbnail($post->ID)) : ?>
            <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'single-post-thumbnail'); ?>
            <meta property="og:image" content="<?php echo $image[0]; ?>" />
        <?php endif; ?>
    <?php endif; ?>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/app/css/main.css" rel="stylesheet">
    <link href="<?php echo get_stylesheet_directory_uri(); ?>/app/css/style.css" rel="stylesheet">
    <style>
        #more {
            display: none;
        }
    </style>



</head>

<body id="page-top">
    <!-- Messenger Chat Plugin Code -->
    <div id="fb-root"></div>
    <!-- Your Chat Plugin code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
    <script>
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "1421561518104127");
        chatbox.setAttribute("attribution", "setup_tool");
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: 'v11.0'
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    </script>
    <section class="">
        <section id="quickheader">
            <div class="container">
                <div class="quicklink-div d-md-flex justify-content-between">
                    <div class="contact-information d-flex justify-content-center">
                        <a href="#call" data-toggle="modal">
                            <div class="media mr-3">
                                <img class="mr-1 icon-svg " src="<?php echo get_stylesheet_directory_uri(); ?>/img/phone.svg">
                                <div class="media-body">
                                    <p>For Inquiry</p>
                                    <a data-toggle="modal" href="#call">Call Us</a>
                                </div>
                            </div>
                        </a>
                        <a href="mailto:ace@ace.edu.np">
                            <div class="media">
                                <img class="mr-1 icon-svg" src="<?php echo get_stylesheet_directory_uri(); ?>/img/icons/mail.svg">
                                <div class="media-body">
                                    <p>Mail us</p>
                                    <a href="mailto:ace@ace.edu.np">ace@ace.edu.np</a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <hr class="d-block d-sm-none mt-1 mb-1">
                    <div class="d-flex align-items-center text-center quicklink-btn">
                        <ul class="top-menu-list pl-0 ">
                            <li><a href="<?php echo esc_url(home_url('/news-events')); ?>">News & Events</a></li>
                            <?php /*  <li><a href="<?php echo esc_url( home_url( '/newsletter' ) ); ?>">Newsletter</a></li> */ ?>
                            <li><a href="<?php echo esc_url(home_url('/student-blogs')); ?>">Student Blogs</a></li>
                            <li>
                                <div class="btn-group">
                                    <a type="button" class="dropdown-toggle" data-toggle="dropdown" href="" style="color:#fff">Fee Payment</a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="http://ace.gigaerp.com/Security/user/Index " target="_blank" type="button" style="color:#000">Ace Institute of Management</a>
                                        <a href="http://aibs.gigaerp.com/Security" style="color:#000" target="_blank" class="dropdown-item" type="button">Ace International Business School</a>
                                    </div>
                                </div>
                            </li>
                            <li><a href="https://entrance.ace.edu.np/form/register" target="_blank">Apply Online</a></li>
                            <?php /*
			   <li>
                   <div class="btn-group">					   
                      <a type="button" class="dropdown-toggle" data-toggle="dropdown" href="" style="color:#fff">Apply Online</a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="https://entrance.ace.edu.np/form/register" target="_blank" type="button" style="color:#000">Bachelors | Masters</a>
                        <?php //<a href="https://ilearn.ace.edu.np/login/signup.php" style="color:#000" target="_blank" class="dropdown-item" type="button">A-level</a> ?>
						<a href="https://entrance.ace.edu.np/form/register" style="color:#000" target="_blank" class="dropdown-item" type="button">A Level</a> 
                      </div>
                    </div>
               </li>
				 */ ?>
                            <li>
                                <div class="btn-group">
                                    <a type="button" class="dropdown-toggle" data-toggle="dropdown" href="" style="color:#fff">Student/Faculty Login</a>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item" href="https://learninghub.ace.edu.np/login/index.php" target="_blank" type="button" style="color:#000">Ace Institute of Management</a>
                                        <?php /*<a href="https://ilearn.ace.edu.np/login" style="color:#000" target="_blank" class="dropdown-item" type="button">Ace International Business School</a> */ ?>
                                        <a href="http://ilearn.ace.edu.np/ilearn/login/index.php" style="color:#000" target="_blank" class="dropdown-item" type="button">Ace International Business School</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- Navigation -->
        <nav class="yamm navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/weareace.svg" alt="ace group of institutions" width="110px"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse-grid" aria-controls="navbar-collapse-grid" aria-expanded="false" aria-label="Toggle navigation"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/icons/menu_icon.svg" width="25px"></button>
                <div class="navbar-collapse collapse" id="navbar-collapse-grid">
                    <ul class="navbar-nav ml-auto">
                        <!-- Grid 12 Menu-->
                        <li class="nav-item dropdown yamm-fw"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">About</a>
                            <div class="dropdown-menu">
                                <div class="grid-demo">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <h4 class="menu-head">About Us</h4>
                                            <p> Ace is a well-known and trusted name in higher education in Nepal for over two decades. Established in 1999, Ace has evolved into one of the best providers of management education in the country.</p>
                                            <a href="<?php echo esc_url(home_url('/about-ace')); ?>" class="border-btn menu-btn mt-0">Learn More</a>
                                            <hr class="only_mobile_hr">
                                        </div>
                                        <div class="col-md-3">
                                            <h4 class="menu-head">Campuses</h4>
                                            <div class="anchor-div">
                                                <a href="<?php echo esc_url(home_url('/about-ace')); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/ace institute of management.svg" class="mb-3" width="200px" alt="Ace Institute of Management"> </a>
                                                <a href="<?php echo esc_url(home_url('/about-ace')); ?>"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/ace international business school.svg" class="mb-5" width="200px" alt="Ace International Business School"> </a>
                                            </div>
                                        </div>
                                        <hr class="only_mobile_hr">
                                        <div class="col-md-3">
                                            <h4 class="menu-head">Affiliations</h4>
                                            <div class="anchor-div">
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/pokhara-university')); ?>">Pokhara University, Nepal</a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/glasgow-caledonian-university')); ?>">Glasgow Caledonian University, Scotland</a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/queen-margaret-university')); ?>">Queen Margaret University, UK</a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/cambridge-university')); ?>">Cambridge Assessment International Education, UK</a>
                                                <hr class="only_mobile_hr">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown yamm-fw"><a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Academics</a>
                            <div class="dropdown-menu">
                                <div class="grid-demo">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h4 class="menu-head">MASTERS DEGREE PROGRAMS</h4>
                                            <div class="anchor-div">
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/mba-glasgow-caledonian-university')); ?>">MBA <span>(Glasgow Caledonian University)</span></a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/mba-pokhara-university')); ?>">MBA Morning <span>(Pokhara University)</span></a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/executive-mba')); ?>">Executive MBA <span>(Pokhara University)</span></a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/mba-evening')); ?>">MBA Evening <span>(Pokhara University)</span></a>
                                                <a href="<?php echo esc_url(home_url('/master-of-business-administration')); ?>" class="border-btn menu-btn">Learn More</a><a href="https://entrance.ace.edu.np/form/register" target="_blank" class="border-btn inverse">Apply Now</a>
                                                <hr class="only_mobile_hr">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <h4 class="menu-head">BACHELORS DEGREE PROGRAMs</h4>
                                            <div class="anchor-div">
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/bba-glasgow-caledonian-university')); ?>">BBA <span>(Glasgow Caledonian University)</span></a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/bba-pokhara-university')); ?>">BBA <span>(Pokhara University)</span></a>
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/bba-bi')); ?>">BBA-BI <span>(Pokhara University)</span></a>
                                                <a href="<?php echo esc_url(home_url('/bachelor-of-business-administration')); ?>" class="border-btn menu-btn">Learn More</a><a href="https://entrance.ace.edu.np/form/register" class="border-btn inverse" target="_blank">Apply Now</a>
                                                <hr class="only_mobile_hr">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <h4 class="menu-head">CAMBRIDGE A LEVEL PROGRAM</h4>
                                            <div class="anchor-div">
                                                <a class="anchor-link" href="<?php echo esc_url(home_url('/alevel')); ?>">A Level <span>(Cambridge Assessment International Education)</span></a>
                                                <a href="<?php echo esc_url(home_url('/alevel')); ?>" class="border-btn menu-btn">Learn More</a><a href="https://entrance.ace.edu.np/form/register" target="_blank" class="border-btn inverse" target="_blank">Apply Now</a>
                                                <hr class="only_mobile_hr">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item "><a class="nav-link " href="<?php echo esc_url(home_url('/student-life-at-ace')); ?>">Student Life</a></li>
                        <li class="nav-item "><a class="nav-link " href="<?php echo esc_url(home_url('/ascend')); ?>">Ace Start-up Center</a> </li>
                        <li class="nav-item "><a class="nav-link " href="<?php echo esc_url(home_url('/placements-career')); ?>">Placements & Career</a> </li>
                        <li class="nav-item "><a class="nav-link " href="<?php echo esc_url(home_url('/contact')); ?>">Contact Us</a> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>

    <!-- start apply online  -->
    <p style="z-index:5000;" class="position-fixed apply-online-pasa03 text-white text-bold " style=" "><a class="text-white" href="https://entrance.ace.edu.np/form/register" target="_blank">Apply Online</a></p>
    <!-- end apply online  -->