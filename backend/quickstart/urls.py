from django.urls import include, path
from django.views.generic import TemplateView

app_name='quickstart'

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index')
   
]