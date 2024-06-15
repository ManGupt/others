# -*- coding: utf-8 -*-

{
    'name': "OWL",
    'version': '1.0.0',
    'depends': ['base', 'web'],
    'author': "Manish Kumar Gupta",
    'category': 'MKG/Domain',
    'description': """
    MKG module.
    """,
    'website': "mkg.mkg",
    'maintainer': "mangupt",
    # GPL-2 or any later version, GPL-3 or any later version, AGPL-3, LGPL-3, Other OSI approved licence
    # OEEL-1 (Odoo Enterprise Edition License v1.0), OPL-1 (Odoo Proprietary License v1.0), Other proprietary
    'license': "Other proprietary",
    # data files always loaded at installation/updation, ref from root dir
    'data': [
        'views/templates.xml',
    ],
    'assets': {
        'mkgowl.assets_mkg': [
            # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap'),

            'web/static/src/libs/fontawesome/css/font-awesome.css', # required for fa icons
            'web/static/src/legacy/js/promise_extension.js', # required by boot.js
            'web/static/src/boot.js', # odoo module system
            'web/static/src/env.js', # required for services
            'web/static/src/session.js', # expose __session_info__ containing server information
            'web/static/lib/owl/owl.js', # owl library
            'web/static/lib/owl/odoo_module.js', # to be able to import "@odoo/owl"
            'web/static/src/core/utils/functions.js',
            'web/static/src/core/browser/browser.js',
            'web/static/src/core/registry.js',
            'web/static/src/core/assets.js',
            'mkgowl/static/src/**/*',
        ],
    },
    # default values is False.
    'auto_install': True,
    'installable': True,
    'external_dependencies': {
        # python modules
        'python': [],
        # binary executable
        'bin': [],
    },
    # app or extn
    'application': True,
}
