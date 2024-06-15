# -*- coding: utf-8 -*-

from odoo import api, models, fields
import datetime
from odoo.exceptions import ValidationError
from odoo.tools import float_utils

class Sample(models.Model):
    # Create table 'mkg_sample': '.' -> '_'
    _name = "mkg.sample"
    _description = "Sample table in mkg base app/model"
    
    # Create columns in table
    active = fields.Boolean("Show record in list", default=False)
    col1 = fields.Char('String Column 1', required=True, help='Tooltip help on UI')
    col2 = fields.Float('# Float Column 2', required=True)
    col3 = fields.Boolean('Bool Column 3', default=True)
    col4 = fields.Integer('# Integer Column 4', default=0)
    
    col5 = fields.Selection(string='Type',
        selection=[('none', 'None'), ('val1', 'Value1'), ('val2', 'Value2')],
        help="Type is used to separate", default='none', copy=False)
    
    readonlytext = fields.Char('Read-Only UI', copy=False, default="MKG")
    computedstr = fields.Char('Computed String', copy=False, compute='_compute_str')
    computedlen = fields.Integer('Computed Length', store=False, readonly=True, copy=False, compute='_compute_len')
    date = fields.Date("Now", readonly=True, copy=False, default=lambda self: fields.Date.today())
    # compute called at change and inverse called when saving record.
    datetime = fields.Datetime("Now+1Day", readonly=True, copy=False, default=lambda self: fields.Datetime.add(datetime.datetime.now(), days=-1))

    # E.g: Many house can be owned by One person
    many2one_id = fields.Many2one("mkg.many2one", string="Many2One")
    # E.g: One house bid can be by Many person
    # TODO: add action to accept only one offer
    one2many_ids = fields.One2many("mkg.one2many", "col0", string="One2Many")
    # E.g: Many house can have Many tags (corner, beach facing etc.)
    many2many_ids = fields.Many2many("mkg.many2many", string="Many2Many")

    # inherit users
    m2o = fields.Many2one("res.users", default=lambda self: self.env.user)

    # TODO: https://www.odoo.com/documentation/16.0/developer/tutorials/getting_started/12_sprinkles.html#stat-buttons

    _sql_constraints = [
        ('check_col4_positive', 'CHECK(col4 >= 0)', 'The column 4 can\'t be negative.'),
    ]

    @api.depends('readonlytext')
    def _compute_len(self):
        for rec in self:
            rec.computedlen = len(str(rec.readonlytext))

    @api.depends('readonlytext')
    def _compute_str(self):
        for rec in self:
            rec.computedstr = str(rec.readonlytext)

    def call_pub_func(self):
        for rec in self:
            rec.col5 = ''
        print("base")
        return True

    @api.constrains('col2')
    def _check_positive(self):
        for rec in self:
            # float_compare()
            if float_utils.float_is_zero(rec.col2, 2):
                raise ValidationError("Positive float value needed.")

    #@api.model
    #def create(self, args):
    #    return super().create(args)
    #
    #@api.model
    #def update(self, args):
    #    return super().write(args)
    #
    #@api.model
    #def read(self, args=None, _=None):
    #    return super().read(fields=args)
    #
    #@api.ondelete(at_uninstall=False)
    #def _unlink_mkg(self):
    #    raise xyz