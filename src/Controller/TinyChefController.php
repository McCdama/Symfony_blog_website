<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TinyChefController extends AbstractController
{
    /**
     * @Route("/tiny/chef", name="tiny_chef")
     */
    public function index(): Response
    {
        return $this->render('tiny_chef/index.html.twig', [
            'controller_name' => 'TinyChefController',
        ]);
    }
}
