# Generated by Django 4.2.3 on 2023-10-15 17:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0003_getnews'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='getnews',
            name='topic_id',
        ),
        migrations.AlterField(
            model_name='getnews',
            name='topic_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dashboard.newstopics'),
        ),
    ]