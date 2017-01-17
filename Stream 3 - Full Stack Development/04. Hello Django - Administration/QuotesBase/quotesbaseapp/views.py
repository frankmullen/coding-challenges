from django.shortcuts import render
from quotesbaseapp.models import Quote

def get_quotes(request):
    return render(request, "QuotesBase/home.html",
                  {'quotes_list': Quote.objects.all()})
