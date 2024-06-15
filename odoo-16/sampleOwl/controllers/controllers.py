from odoo import http
from odoo.http import request, route

class Mkg(http.Controller):
    @http.route(['/mkgowl/mkg'], type='http', auth='public')
    def show_mkg(self):
        """
        Renders the owl page
        """
        print("OWL")
        return request.render('mkgowl.mkg')



