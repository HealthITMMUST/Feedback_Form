
from django.contrib import admin
from django.urls import include, path

# In your project's urls.py file

admin.site.site_header = "FeedBack Admin"
# In your project's urls.py file


admin.site.site_title = "FeedBack Forms"
admin.site.index_title = "Welcome to the feedback Section"



urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('', include('survey.urls')),
    path('survey/', include('survey.urls'))
]
