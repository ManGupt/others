# -*- coding: utf-8 -*-

from odoo import models, fields

class Many2One(models.Model):
    # Create table 'mkg_many2one': '.' -> '_'
    _name = "mkg.many2one"
    _rec_name = 'col1'
    _description = "Sample table in mkg base app/model"
    
    # Create columns in table
    col1 = fields.Char('Many 2 One', required=True, help='Tooltip help on UI')
    # show records linked to this
    col2_ids = fields.One2many('mkg.sample', 'many2one_id')
    