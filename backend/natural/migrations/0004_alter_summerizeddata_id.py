# Generated by Django 4.2.3 on 2023-10-21 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('natural', '0003_rename_new_topic_summerizeddata_news_topic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summerizeddata',
            name='id',
            field=models.TextField(max_length=1000, primary_key=True, serialize=False),
        ),
    ]
