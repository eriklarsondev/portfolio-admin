<?php
namespace devfolio;

/**
 * include theme config
 */
include_once dirname(get_template_directory()) . '/classes/index.php';

/**
 * append additional theme config below
 */
$devfolio = new Devfolio();

/**************************************************************************
 *** required plugin config
 *************************************************************************/

$devfolio->requirePlugin('ACF_To_REST_API', 'ACF to REST API');

/**************************************************************************
 *** menu location config
 *************************************************************************/

$devfolio->addMenu('homepage hero');

/**************************************************************************
 *** custom post type config
 *************************************************************************/

$devfolio->removePostType('html snippet');

$devfolio->addPostType(
    'experience',
    (object) [
        'collection' => 'experience',
        'icon' => 'businessman',
        'features' => 'title, editor, custom fields',
    ]
);

$devfolio->addPostType(
    'tech',
    (object) [
        'collection' => 'featured tech',
        'icon' => 'editor code',
        'features' => 'title, custom fields',
    ]
);

$devfolio->addPostType(
    'project',
    (object) [
        'icon' => 'desktop',
        'features' => 'thumbnail, title, editor, custom fields',
    ]
);

$devfolio->addPostType(
    'service',
    (object) [
        'icon' => 'store',
        'features' => 'title, editor, custom fields',
    ]
);
