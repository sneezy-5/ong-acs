from django.shortcuts import render

# load page
def load_page(request):
    return render(request, 'acs_load/loader.html')
