from django.test import TestCase

class StringTest(TestCase):
    def test_concatene(self):
        """Test bidon"""
        self.assertEqual("Bon"+"Jour", "hello")