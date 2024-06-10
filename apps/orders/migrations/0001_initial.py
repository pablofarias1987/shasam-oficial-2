# Generated by Django 3.1.7 on 2023-10-25 23:12

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('not_processed', 'Not Processed'), ('processed', 'Processed'), ('shipped', 'Shipping'), ('delivered', 'Delivered'), ('cancelled', 'Cancelled')], default='not_processed', max_length=50)),
                ('transaction_id', models.CharField(max_length=255, unique=True)),
                ('amount', models.DecimalField(decimal_places=2, max_digits=5)),
                ('full_name', models.CharField(max_length=255)),
                ('address_line_1', models.CharField(max_length=255)),
                ('address_line_2', models.CharField(blank=True, max_length=255)),
                ('commune', models.CharField(choices=[('Colina', 'Colina'), ('Lampa', 'Lampa'), ('Til Til', 'Til Til'), ('Cordillera', 'Cordillera'), ('Puente Alto', 'Puente Alto'), ('San José de Maipo', 'San José De Maipo'), ('Calera de Tango', 'Calera De Tango'), ('Paine', 'Paine'), ('San Bernardo', 'San Bernardo'), ('Melipilla', 'Melipilla'), ('Curacaví', 'Curacaví'), ('María Pinto', 'María Pinto'), ('San Pedro', 'San Pedro'), ('Santiago', 'Santiago'), ('Cerro Navia', 'Cerro Navia'), ('Conchalí', 'Conchalí'), ('El Bosque', 'El Bosque'), ('Estación Central', 'Estación Central'), ('Huechuraba', 'Huechuraba'), ('Independencia', 'Independencia'), ('La Cisterna', 'La Cisterna'), ('La Granja', 'La Granja'), ('La Florida', 'La Florida'), ('La Pintana', 'La Pintana'), ('La Reina', 'La Reina'), ('Las Condes', 'Las Condes'), ('Lo Barnechea', 'Lo Barnechea'), ('Lo Espejo', 'Lo Espejo'), ('Lo Prado', 'Lo Prado'), ('Macul', 'Macul'), ('Maipú', 'Maipú'), ('Ñuñoa', 'Ñuñoa'), ('Pedro Aguirre Cerda', 'Pedro Aguirre Cerda'), ('Peñalolén', 'Peñalolén'), ('Providencia', 'Providencia'), ('Pudahuel', 'Pudahuel'), ('Quilicura', 'Quilicura'), ('Quinta Normal', 'Quinta Normal'), ('Recoleta', 'Recoleta'), ('Renca', 'Renca'), ('San Miguel', 'San Miguel'), ('San Joaquín', 'San Joaquín'), ('San Ramón', 'San Ramón'), ('Vitacura', 'Vitacura'), ('Isla de Maipo', 'Isla De Maipo'), ('Padre Hurtado', 'Padre Hurtado'), ('Peñaflor', 'Peñaflor'), ('Talagante', 'Talagante')], default='El Bosque', max_length=255)),
                ('telephone_number', models.CharField(max_length=255)),
                ('shipping_name', models.CharField(max_length=255)),
                ('shipping_time', models.CharField(max_length=255)),
                ('shipping_price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('date_issued', models.DateTimeField(default=datetime.datetime.now)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrderItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('count', models.IntegerField()),
                ('date_added', models.DateTimeField(default=datetime.datetime.now)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='product.product')),
            ],
        ),
    ]
