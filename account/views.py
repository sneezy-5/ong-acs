from acs_home.models import Don
from django.db import reset_queries
from django.http.response import HttpResponse
from django.shortcuts import render, redirect, get_object_or_404
from .forms import UserCreation, ConnexionForm, ParagraphErrorList, AccountUpdateForm
from .models import  Account
from acs_home import forms
from django.core.mail import BadHeaderError, send_mail
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
import random
from django.conf import settings

from django.core.files.storage import default_storage
from django.core.files.storage import FileSystemStorage
import os
#import cv2
import json
import base64



def confirm_page(request, page_id):
    """verifie si le compte existe et si oui il active le compte
        si le compte est activé on retourne un page d'erreur
    """
    int_list = random.randint(200, 900)

    list_random = ["azerty%dqssd" %(int_list), "poiu%dtryf"%(int_list)]
    user = get_object_or_404(Account, pk=page_id)
    if user.is_active == True:
        return render(request, '404.html')
        
    
    else:
        user.is_active=True
        user.save()
        rand_shuffle = random.shuffle(list_random)
        #randon_choce = random.choice(rand_shuffle)
        #print(randon_choce)
        #send_mail("code client", "utilisez ce code {} pour vous connecter ouvotre email".format(randon_choce), "adingranarcisse2@gmail.com" ,[request.POST.get("email")] )

    
    context = {
        'email': user.email,
  

    }

    return render(request, 'account/confirm.html', context=context)




def connexion(request):
    """connect user in if user is exit"""
    if request.user.is_authenticated:
        return redirect('account:espace')
    else:
        if request.method == 'POST':
            email = request.POST.get('email')
            password = request.POST.get('password')

            user = authenticate(request, email=email, password=password)
            if user is not None:
                if user.is_active == False:
                    return render("account/confirme.html")
                else:
                    login(request, user)
                    return redirect('account:espace')

            else:
                messages.info(request, 'Username OR password is incorrect')

        context = {}
        return render(request, 'account/logingespaceMembre.html', context)


def logoutUser(request):
    logout(request)
    return redirect('account:connexion')

def espaceMembre(request):
    form= forms.Adherer()
    don = Don.objects.filter(email=request.user.email)
  
    context ={
        'don':don,
        'form':form,
    }
    return render(request, 'account/espaceMembre.html', context)


def edit_account_view(request, *args, **kwargs):
	if not request.user.is_authenticated:
		return redirect("login")
	user_id = kwargs.get("user_id")
	account = Account.objects.get(pk=user_id)
	if account.pk != request.user.pk:
		return HttpResponse("You cannot edit someone elses profile.")
	context = {}
	if request.POST:
		form = AccountUpdateForm(request.POST, request.FILES, instance=request.user)
		if form.is_valid():
			form.save()
			return redirect("account:espace")
		else:
			form = AccountUpdateForm(request.POST, instance=request.user,
				initial={
					"id": account.pk,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
			context['form'] = form
	else:
		form = AccountUpdateForm(
			initial={
					"id": account.pk,
					"email": account.email, 
					"username": account.username,
					"profile_image": account.profile_image,
					"hide_email": account.hide_email,
				}
			)
		context['form'] = form
	context['DATA_UPLOAD_MAX_MEMORY_SIZE'] = settings.DATA_UPLOAD_MAX_MEMORY_SIZE
	return render(request, "account/edit_account.html", context)















