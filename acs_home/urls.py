from django.urls import path, reverse_lazy
from django.conf import settings
from . import views
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static

urlpatterns = [
    path("home/", views.home, name='home'),
    path("quisommenous/", views.qui_somme_nous, name='qui_somme_nous'),
    path("actualite/", views.actualite, name='actualite'),
    path("activite/", views.activite, name='activite'),
    path("faire_don/", views.faire_don, name='faire_don'),
    path('detail_actualite<int:actualite_id>/', views.detail_actualite, name='detail_actualite'),
    path('detail_activite<int:activite_id>/', views.detail_activite, name='detail_activite'),
    path('reset_password/',auth_views.PasswordResetView.as_view(template_name="password_rest/password_reset.html", success_url=reverse_lazy('acs_home:password_reset_done'), email_template_name='password_rest/password_reset_email.html'),name="reset_password"),

    path('reset_password_sent/',auth_views.PasswordResetDoneView.as_view(template_name="password_rest/password_reset_sent.html"),name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
     auth_views.PasswordResetConfirmView.as_view(template_name="password_rest/password_reset_form.html", success_url=reverse_lazy('acs_home:password_reset_complete'),
      
),name="password_reset_confirm"),

    path('reset_password_complete/',auth_views.PasswordResetCompleteView.as_view(template_name="password_rest/password_reset_done.html"),name="password_reset_complete"),
    path('password_change/', auth_views.PasswordChangeView.as_view(), name='password_change'),
    path('password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name="password_rest/password_change_done.html"), name='password_change_done'),

]
if settings.DEBUG:
     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)