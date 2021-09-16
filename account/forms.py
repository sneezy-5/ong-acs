from django import forms
from django.forms import ModelForm, TextInput, EmailInput, PasswordInput, NumberInput
from django.forms.utils import ErrorList
from django.contrib.auth.forms import UserCreationForm


from .models import  Account



class UserCreation(UserCreationForm):
    class Meta:
        model = Account
        fields = ['first_name', 'last_name', 'email', 'password1', 'password2']

class ConnexionForm(ModelForm):
    class Meta:
        model = Account
        fields = ["username", "password"]
        widgets = {
            'username': EmailInput(attrs={'class': 'form-control'}),
            'password': PasswordInput(attrs={'class': 'form-control'}),
        }




class AccountUpdateForm(ModelForm):

    class Meta:
        model = Account
        fields = ('username', 'email', 'profile_image', 'hide_email' )

    def clean_email(self):
        email = self.cleaned_data['email'].lower()
        try:
            account = Account.objects.exclude(pk=self.instance.pk).get(email=email)
        except Account.DoesNotExist:
            return email
        raise forms.ValidationError('Email "%s" is already in use.' % account)

    def clean_username(self):
        username = self.cleaned_data['username']
        try:
            account = Account.objects.exclude(pk=self.instance.pk).get(username=username)
        except Account.DoesNotExist:
            return username
        raise forms.ValidationError('Username "%s" is already in use.' % username)


    def save(self, commit=True):
        account = super(AccountUpdateForm, self).save(commit=False)
        account.username = self.cleaned_data['username']
        account.email = self.cleaned_data['email'].lower()
        account.profile_image = self.cleaned_data['profile_image']
        account.hide_email = self.cleaned_data['hide_email']
        if commit:
            account.save()
        return account



class ParagraphErrorList(ErrorList):
    def __str__(self):
        return self.as_divs()
    def as_divs(self):
        if not self: return ''
        return '<div class="errorlist">%s</div>' % ''.join(['<p class="small error">%s</p>' % e for e in self])
