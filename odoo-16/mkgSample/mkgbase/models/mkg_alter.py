# -*- coding: utf-8 -*-

from odoo import models, fields
from . import mkg_sample

class Alter(models.Model):
    # Alter original module: '.' -> '_'
    _inherit = "res.users"
    
    # Create columns in table
    # ValueError: Invalid field 'state' on model 'mkg.many2one'
    m2o_ids = fields.One2many('mkg.sample', 'm2o')

    