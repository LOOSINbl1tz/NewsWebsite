# Generated by Django 4.2.3 on 2023-10-15 17:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0002_alter_newstopics_topic_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='GetNews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic_name', models.CharField(max_length=255, unique=True)),
                ('news_title', models.CharField(max_length=255)),
                ('news_body', models.TextField(max_length=10000)),
                ('date_time', models.DateTimeField(auto_now_add=True)),
                ('topic_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.newstopics')),
            ],
        ),
    ]