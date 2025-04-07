<?php

namespace App\Livewire;

use App\Models\User;
use Livewire\Component;

class Home extends Component
{
    public $data;

    public function mount()
    {
        $this->data = $this->getChartData();
    }

    public function getChartData()
    {
        return User::selectRaw('MONTH(birthdate) as month, COUNT(*) as counts')
            ->groupBy('month')
            ->orderBy('month')
            ->get()
            ->map(function ($data) {
                return
                    [
                        'month' => date('F', mktime(0, 0, 0, $data->month)),
                        'counts' => $data->counts,
                    ];
            });
    }

    public function render()
    {
        return view('livewire.home');
    }
}
