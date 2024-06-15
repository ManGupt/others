# -*- coding: utf-8 -*-

{
    'name': "Link",
    'version': '1.0.0',
    'depends': ['base', 'mkgbase', 'account'],
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
    #'data': [
    #    'views/mkg.xml',
    #],
    # data files containing optionally loaded demonstration data
    #'demo': [
    #    'demo/demo_mkg.xml',
    #],
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
    'assets': {},
}
