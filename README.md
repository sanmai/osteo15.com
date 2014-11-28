# Osteo15 blog

Jekyll version 2.5.1

```Shell
bundle install
jekyll serve
open http://localhost:4000
```

## Utilisation de post_url

Pour générer un lien vers un post, il faut utiliser la fonction [post_url](http://jekyllrb.com/docs/templates/#post-url) de Jekyll :
```HTML
{% post_url 2014-08-08-Lombalgie-paracetamol-et-osteopathie %}
```

## Le problème des caractères spéciaux

### Nom des fichiers

Windows interdit les caractères `\/:*?"<>|`, exemple :
- OK : `2014-04-18-La-methode-De-Gasquet-pour-se-preparer-a-l'accouchement-et-retrouver-la-forme-apres.md`
- KO : `2014-04-18-La-methode-"De-Gasquet"-pour-se-preparer-a-l'accouchement-et-retrouver-la-forme-apres.md`

Le caractère `?` est replacé par `%3F` dans les URLs, ce qui est à éviter :
- OK : `2014-08-21-Bebe-:-quand-consulter-un-osteopathe-?.md` => `/2014/08/21/Bebe-:-quand-consulter-un-osteopathe-%3F/`
- KO : `2014-08-21-Bebe-quand-consulter-un-osteopathe.md` => `/2014/08/21/Bebe-quand-consulter-un-osteopathe/`

[Jekyll crash](https://github.com/jekyll/jekyll/issues/2834) si le nom d'un fichier comporte `:` :
- OK : `2014-02-10-Jogging-le-pied-amortisseur.md`
- KO : `2014-02-10-Jogging-:-le-pied-amortisseur.md`

### URLs

Par exemple, les espaces ne sont pas autorisés : [HTML href syntax: is it okay to have space in file name?](http://stackoverflow.com/questions/4172579).
Il faut utiliser [cgi_escape](http://jekyllrb.com/docs/templates/).

Exemple :
```HTML
<!-- site.address = "8 rue Desnouettes Paris 15" -->
<a href="http://maps.apple.com/?q={{ site.address | cgi_escape }}">{{ site.address }}</a>
<!--
  URL générée : "http://maps.apple.com/?q=8+rue+Desnouettes+Paris+15"
  au lieu de : "http://maps.apple.com/?q=8 rue Desnouettes Paris 15"
-->
```

post_url ne fonctionne pas avec des accents, exemple :
```Markdown
<!-- OK -->
[la micronutrition]({% post_url 2014-03-25-Introduction-a-la-micronutrition %})

<!-- KO -->
[la micronutrition]({% post_url 2014-03-25-Introduction-à-la-micronutrition %})
```

Pareil pour les assets (images et autres fichiers) (problème détecté sous Ubuntu 14.10 x64, Ruby 2.1.0, Jekyll 2.4.0) :
```Markdown
<!-- OK -->
![Schéma déroulement consultation](/assets/2014-08-20/Deroulement-consultation.png)

<!-- KO -->
![Schéma déroulement consultation](/assets/2014-08-20/Déroulement consultation.png)
```

## Formats des images

- Le format non destructeur [PNG](http://fr.wikipedia.org/wiki/Portable_Network_Graphics) (.png) adapté pour les images simples comprenant des aplats de couleurs
- Le format destructeur [JPEG](http://fr.wikipedia.org/wiki/JPEG) (.jpg) pour la photographie

## Intégration d'une video YouTube

```HTML
<div class="responsive-iframe">
  <iframe src="//www.youtube.com/embed/VJo5z11rUYQ" frameborder="0" allowfullscreen></iframe>
</div>
```

## Caractères alacon

- ’ -> '
- “ ” « » -> "
- … -> ...
- oe -> œ

## Favicon

- https://github.com/audreyr/favicon-cheat-sheet
- [Apple - Configuring Web Applications](https://developer.apple.com/library/iad/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html)
- [Chrome - Add to Homescreen](https://developer.chrome.com/multidevice/android/installtohomescreen)
- [W3C HTML5 - Link type "icon"](http://www.w3.org/TR/html5/links.html#rel-icon)

```Shell
# Pour créer une image ICO avec ImageMagick
convert hand-16.png hand-32.png hand-48.png hand-16-32-48.ico
```

## Sitemap

- http://davidensinger.com/2013/11/building-a-better-sitemap-xml-with-jekyll/
- http://www.sitemaps.org/

## Hébergement

Amazon Simple Storage Service (Amazon S3)
- [Hosting a Static Website on Amazon Web Services](http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html)
- [Hosting a static (Jekyll) blog on Amazon S3](http://www.savjee.be/2013/02/howto-host-jekyll-blog-on-amazon-s3/)
- [Enable gzip for Jekyll blogs on Amazon S3](http://www.savjee.be/2014/03/Jekyll-to-S3-deploy-script-with-gzip/)