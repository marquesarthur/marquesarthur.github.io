var ubcModule = angular.module('ubc', []);

ubcModule.service('UBCService',
  function() {
  
	this.publications = [
		{
			authors: "MARQUES, ARTHUR; RAMALHO, F. S.; ANDRADE, W. L.",
			title: "SORTT - A Service Oriented Requirements Traceability Tool",
			download: "https://drive.google.com/file/d/0B3lLOi7usMD8bkNoaE82bE9yMjg/view?usp=sharing",
			info: "In: Congresso Brasileiro de Software: Teoria e Prática, 2015, Belo Horizonte. Proceedings of 6th Brazilian Conference on Software: Theory and Practice. , 2015. v.6. p.121 - 128",
		},
		{
			authors: "MARQUES, ARTHUR; RAMALHO, FRANKLIN; ANDRADE, WILKERSON L.",
			title: "TRL: A traceability representation language",
			link: "http://dl.acm.org/citation.cfm?id=2695745&dl=ACM&coll=DL&CFID=642259411&CFTOKEN=49104665",
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8Y0lBLUVQa1N2U2M",
			info: "In: the 30th Annual ACM Symposium, Salamanca. Proceedings of the 30th Annual ACM Symposium on Applied Computing - SAC '15. New York: ACM Press, 2015. v.1. p.1364",
		},
		{
			authors: "MARQUES, ARTHUR; RAMALHO, FRANKLIN; ANDRADE, WILKERSON L.",
			title: "Towards a requirements traceability process centered on the traceability model",
			link: "http://dl.acm.org/citation.cfm?id=2695776&dl=ACM&coll=DL&CFID=642259411&CFTOKEN=49104665",
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8T3BjbXMxakFxR0k",
			info: "In: the 30th Annual ACM Symposium, Salamanca. Proceedings of the 30th Annual ACM Symposium on Applied Computing - SAC '15. New York: ACM Press, 2015. v.1. p.1358",
		},
		{
			authors: "MARQUES, A. S.; RAMALHO, F. S.; ANDRADE, W. L.",
			title: "Comparing Model-Based Testing with Traditional Testing Strategies: An Empirical Study",
			link: "http://ieeexplore.ieee.org/xpl/login.jsp?tp=&arnumber=6825672&url=http%3A%2F%2Fieeexplore.ieee.org%2Fxpls%2Fabs_all.jsp%3Farnumber%3D6825672",
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8Wm1iWVEwQUNyNUk",
			info: "In: 2014 IEEE Seventh International Conference on Software Testing, Verification and Validation Workshops. IEEE, 2014. p.264",
		},
		{
			authors: "Neto; MARQUES, A. S.; Gheyi; Borba; Castor",
			title: "A Design Rule Language for Aspect-Oriented Programming",			
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8cWJUaXNGczJ6ZDA",
			info: "In: XIII Brazilian Symposium on Programming Languages, 2009.",
		},
		{
			authors: "MARQUES, A. S.; Gheyi",
			title: "Uma Linguagem para Especificação de Regras de Design para Programas Orientados a Aspectos",
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8SlNFS3hqN1kxdWc",
			info: "In: VI Congresso de Inciação Científica da UFCG, 2009, Campina Grande.",
		},
		{
			authors: "MARQUES, A. S.; Gheyi",
			title: "Uma Linguagem para Especificação de Regras de Design para Programas Orientados a Aspectos",
			download: "https://drive.google.com/open?id=0B3lLOi7usMD8c0JjVG1DOTgwOFE",
			info: "In: Concurso de Trabalhos de Iniciação Científica, 2009, Bento Gonçalves.",
		},
	];

	this.links = {		
		github: "https://github.com/marquesarthur",
		instagram: "https://www.instagram.com/arthur.marques.cg/",
		facebook: "https://www.facebook.com/arthur.marques.14",
		plus: "https://plus.google.com/105671841434768693376/posts",
		linkedin: "https://br.linkedin.com/in/arthur-marques-214b5983"

	};
});