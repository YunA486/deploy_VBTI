from django.contrib import admin
from .models import Vegetable, Question, Choice

admin.site.register(Vegetable)
admin.site.register(Question)
admin.site.register(Choice)

# Register your models here.
