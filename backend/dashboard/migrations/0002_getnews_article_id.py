# Generated by Django 4.2.3 on 2023-10-17 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='getnews',
            name='article_id',
            field=models.CharField(max_length=500, null=True, unique=True),
        ),
    ]
