from OpenGL.GL import *
from OpenGL.GLUT import *
from OpenGL.GLU import *
import sys

# Define the cube vertices and edges
vertices = [
    [-1, -1, -1], [1, -1, -1],
    [1, 1, -1], [-1, 1, -1],
    [-1, -1, 1], [1, -1, 1],
    [1, 1, 1], [-1, 1, 1]
]

edges = [
    (0, 1), (1, 2), (2, 3), (3, 0),
    (4, 5), (5, 6), (6, 7), (7, 4),
    (0, 4), (1, 5), (2, 6), (3, 7)
]

angle = 0
window_width = 800
window_height = 400


def draw_cube():
    glColor3f(1.0, 1.0, 1.0)  # Set cube color to white
    glBegin(GL_LINES)
    for edge in edges:
        for vertex in edge:
            glVertex3fv(vertices[vertex])
    glEnd()


def display():
    global angle
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT)

    # Left viewport - original
    glViewport(0, 0, window_width // 2, window_height)
    glLoadIdentity()
    gluLookAt(3, 3, 7, 0, 0, 0, 0, 1, 0)
    draw_cube()

    # Right viewport - transformed
    glViewport(window_width // 2, 0, window_width // 2, window_height)
    glLoadIdentity()
    gluLookAt(3, 3, 7, 0, 0, 0, 0, 1, 0)

    # Apply transformations
    glTranslatef(1.5, 0.5, 0.0)
    glRotatef(angle, 1, 1, 0)
    glScalef(1.0, 1.0, 1.0)
    draw_cube()

    glutSwapBuffers()


def update(value):
    global angle
    angle += 1
    if angle > 360:
        angle -= 360
    glutPostRedisplay()
    glutTimerFunc(16, update, 0)


def init():
    glEnable(GL_DEPTH_TEST)
    glClearColor(0.1, 0.1, 0.1, 1.0)  # Background color
    glMatrixMode(GL_PROJECTION)
    glLoadIdentity()
    gluPerspective(45, (window_width / window_height), 0.1, 100.0)
    glMatrixMode(GL_MODELVIEW)


def main():
    glutInit(sys.argv)
    glutInitDisplayMode(GLUT_DOUBLE | GLUT_RGB | GLUT_DEPTH)
    glutInitWindowSize(window_width, window_height)
    glutInitWindowPosition(100, 100)
    glutCreateWindow(b"3D Transformations - Before and After")
    init()
    glutDisplayFunc(display)
    glutTimerFunc(0, update, 0)
    glutMainLoop()


main()