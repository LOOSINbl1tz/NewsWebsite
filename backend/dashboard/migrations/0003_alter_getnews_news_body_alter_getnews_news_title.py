# Generated by Django 4.2.3 on 2023-10-21 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_getnews_article_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='getnews',
            name='news_body',
            field=models.TextField(max_length=10000, null=True),
        ),
        migrations.AlterField(
            model_name='getnews',
            name='news_title',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
