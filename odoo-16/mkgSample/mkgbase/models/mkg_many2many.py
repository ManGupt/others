# -*- coding: utf-8 -*-

from odoo import models, fields

class Many2Many(models.Model):
    # Create table 'mkg_many2many': '.' -> '_'
    _name = "mkg.many2many"
    _rec_name = 'col1'
    _description = "Sample table in mkg base app/model"
    
    # Create columns in table
    col1 = fields.Char('Many 2 Many', required=True, help='Tooltip help on UI')
    