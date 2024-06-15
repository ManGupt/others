# -*- coding: utf-8 -*-

from odoo import models, fields

class One2Many(models.Model):
    # Create table 'mkg_one2many': '.' -> '_'
    _name = "mkg.one2many"
    _rec_name = 'col1'
    _description = "Sample table in mkg base app/model"
    
    # col0 is needed as One2Many is virtual relation
    col0 = fields.Many2one("mkg.sample", string="Base for One2Many")
    col1 = fields.Char('One 2 Many', required=True, help='Tooltip help on UI')
    
    