# -*- coding: utf-8 -*-

from odoo import models, fields, Command

class Link(models.Model):
    # Link original module: '.' -> '_'
    _inherit = "mkg.sample"
    
    def call_pub_func(self):
        for rec in self:
            pass
        self.env["account.move"].create({
                'move_type': 'out_invoice',
                'partner_id': self.env.user.id,
                'invoice_user_id': self.env.user.id,
                'invoice_line_ids': [
                    Command.create({'name': "Selling Price", 'price_unit': 10000.0, 'quantity': 1}),
                    Command.create({'name': "Admin Fee", 'price_unit': 400.0, 'quantity': 1}),
                ],
        })
        return super().call_pub_func()
