from django import forms
from django.forms import ModelForm
from django.forms.utils import ErrorList

from .models import Don, Adherant


class DonForm(ModelForm):
  
    money= forms.IntegerField(required=False)
    class Meta:
        model = Don
        fields = ['email', 'name', 'firt_name', 'adress', 'country', 'money', 'civilite']



class Adherer(ModelForm):
    email= forms.CharField(required=False)
    name= forms.CharField(required=False)
    adress= forms.CharField(required=False)
    class Meta:
        model = Adherant
        fields = ['email', 'civilite', 'name', 'firt_name', 'adress', 'code_postal', 'city', 'country', 'phone']

class ParagraphErrorList(ErrorList):
    def __str__(self):
        return self.as_divs()
    def as_divs(self):
        if not self: return ''
        return '<div class="errorlist">%s</div>' % ''.join(['<p class="small error">%s</p>' % e for e in self])
