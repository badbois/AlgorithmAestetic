# AlgorithmAestetic

Pseudo-code:

premierX=0
premierY=0
precedentX=0
precedentY=0
Pour i allant de 1 à 15 faire:
	Pour j allant de 1 à 20 faire:
		Pour k allant de 0 à 7
			si k vaut 0
                premierX= X
                premierY=Y
                precedentX=X
                precedentY=Y	
	        Sinon
                X=nombre aléatoire entre (i-1)*(width/14) et i*(width/14)
                Y=nombre aléatoire entre (j-1)*(height/19) et j*(height/19)
                dessiner une ligne entre le point(X, Y) et le point(precedentX, precedentY)
                Si k vaut 8
                    dessiner une ligne entre le point(X, Y) et le point(premierX, premierY)
                Fin si
		        precedentX=X
                precedentY=Y	

	        Fin si
        Fin pour
    Fin pour
Fin pour
