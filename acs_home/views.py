from django.db import reset_queries
from django.http.response import HttpResponse
from django.shortcuts import render, redirect,  get_object_or_404
from .forms import  Adherer, DonForm, ParagraphErrorList
from account.forms import UserCreation, ConnexionForm
from .models import Activite, Actualite, Adherant
from acs_home import forms
from django.core.mail import BadHeaderError, send_mail, EmailMultiAlternatives
from django.core.mail import BadHeaderError
from django.contrib import messages
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from account.models import Account
from hashlib import md5, sha1

# Come home page
def home(request):
    context ={
            
        }
    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()
    return render(request, "acs_home/home.html", context)


def qui_somme_nous(request):
    context ={
            
        }
    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()
    return render(request, "acs_home/qui_smme_nous.html",context)

def actualite(request):
    context ={
            
        }
    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()
    actualite = Actualite.objects.all()
    paginator = Paginator(actualite, 3)
    page = request.GET.get('page')
    try:
        albums = paginator.page(page)
    except PageNotAnInteger:
        albums = paginator.page(1)
    except EmptyPage:
        albums = paginator.page(paginator.num_pages)
    context = {
        'albums':albums,
        'form':form,
        'paginate': True,
        'actualite': actualite,
        'errors': form.errors.items(),
    }

    return render(request, "acs_home/actualite.html", context)

def activite(request):
    context ={
            
        }
    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()

    activite = Activite.objects.all()
    paginator = Paginator(activite, 2)
    page = request.GET.get('page')
    try:
        albums = paginator.page(page)
    except PageNotAnInteger:
        albums = paginator.page(1)
    except EmptyPage:
        albums = paginator.page(paginator.num_pages)
    context = {
        'album':albums,
            'activite': activite,
            'form':form,
            'paginate': True,
            'errors': form.errors.items(),
    }

    return render(request, "acs_home/activite.html", context=context)





# detail actualite geré par le js
def detail_actualite(request, actualite_id):
    article = get_object_or_404(Actualite, pk=actualite_id)

    context = {
        'actu_name': article.title,
        'actu_describe': article.describe,
        'actu_picture': article.image,
        'actu_date': article.date_add,


    }

    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()
    return render(request, 'acs_home/spoileractualiter.html', context)


# detail activité geré par le js
def detail_activite(request, activite_id):
   
    article = get_object_or_404(Activite, pk=activite_id)
    context = {
        'acti_name': article.title,
        'acti_describe': article.describe,
        'acti_picture': article.image,
        'acti_date': article.date_add,

    }
    if request.method == "POST":
        form = Adherer(request.POST, error_class=ParagraphErrorList)
        if form.is_valid():
                form.save()
                return redirect('acs_home:qui_somme_nous')
    else:
        form= forms.Adherer()
    context['form'] = form
    context['errors'] = form.errors.items()

    return render(request, 'acs_home/spoileractiviter.html', context)




# come don page
def faire_don(request):
        form = DonForm()
        formsInsc = UserCreation()
        
        context = {

                   }
        if request.method == 'POST':
            #form = DonForm(request.POST, error_class=ParagraphErrorList)

            nomin = request.POST.get("last_name") #recupere le formulaire d'inscription
            nomFaire = request.POST.get("name") # recupere le formulaire des dons

            # enregistre les donateurs mensuel
            if nomin:
                formsInsc = UserCreation(request.POST, error_class=ParagraphErrorList)
                if formsInsc.is_valid():
                
                    
                    """contact = Account.objects.filter(email=request.POST.get('email'))
                    if not contact.exists():"""


                    
                    formsInsc.save()
                    user_id = Account.objects.get(email=request.POST.get('email'))
                    user_id.username=sha1(str(user_id.id).encode()).hexdigest()[0:10]
                    user_id.is_active=False
                    user_id.save()
                    
                    #send mail at user to confirm mail
                    subject, from_email, to = 'Validation de compte', 'adingranarcisse2@gmail.com', '{}'.format(request.POST.get('email'))
                    text_content = 'Validation de compte.'
                    html_content = '<p>Cliquez <a href="http://127.0.0.1:8000/account/confirm/{}/">Ici</a>  pour confirmer votre compte </p></br><p>Si vous pensez que c\'est une erreur ne faite rien</p>'.format(sha1(str(user_id.id).encode()).hexdigest()[0:10])
                    msg = EmailMultiAlternatives(subject, text_content, from_email, [to])
                    msg.attach_alternative(html_content, "text/html")
                    msg.send()
                    #send_mail("Validation de compte", "Cliquez sur ce lien pour confirmer votre compte http://127.0.0.1:8000/account/confirm/{}/ .Si vous pensez que c'est une erreur ne faite rien".format(sha1(str(user_id.id).encode()).hexdigest()[0:10]), "adingranarcisse2@gmail.com " ,[request.POST.get('email')] )
                    return render(request, "acs_home/merci.html")
                  
            
            # enregistre les dons qui on été fait
            elif nomFaire:
                form = DonForm(request.POST, error_class=ParagraphErrorList)
                if form.is_valid():
                    form.save()
                    return redirect('acs_home:actualite')


        context['form'] =  form   
        context['forms'] =  formsInsc
        context['errors'] = form.errors.items()
        context['inscrit_errors'] = formsInsc.errors.items()
       
        return render(request, 'acs_home/faire_don.html', context)


